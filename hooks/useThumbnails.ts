import { ProductSchema } from "@/@types/productSchema";
import { supaDb } from "@/services/supadb";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import FallbackImage from "@/assets/images/fallback.jpg";

type UseThumbnailsProps = {
    bucket_name: string;
    bucket_folder: string;
    id: string;
}

type ThumbList = { [key: string]: string }


export function useThumbnails() {
    const [data, setData] = useState<UseThumbnailsProps[]>([])
    const [thumbList, setThumbList] = useState<ThumbList>({})

    const fetchThumbnails = async (data: UseThumbnailsProps[]) => {
        const out: ThumbList = {};

        await Promise.all(data.map(async (item) => {
            const bucketName = item.bucket_name;
            const thumb = `product/${item.bucket_folder}/${item.id}/main`;

            const { data } = await supaDb
                .storage
                .from(bucketName)
                .getPublicUrl(thumb);

            const url = data.publicUrl;

            const { data: imageList } = await supaDb
                .storage
                .from(bucketName)
                .list(thumb, { limit: 1 });

            const ThumbFallback = Image.resolveAssetSource(FallbackImage).uri;

            if (!imageList) return

            const thumbImage = imageList.length > 0
                ? `${url}/${imageList[0].name}`
                : ThumbFallback;

            out[item.id] = thumbImage;
        }));

        setThumbList(out)
    }

    useEffect(() => {
        fetchThumbnails(data)
    }, [data])

    function fetchThumbnailList(data: UseThumbnailsProps[]) {
        setData(data)
    }

    return {
        thumbList,
        fetchThumbnailList
    }
}

export type { UseThumbnailsProps, ThumbList }