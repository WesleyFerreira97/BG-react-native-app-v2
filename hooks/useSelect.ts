import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supaDb } from "../services/supadb";

export type UseSelectProps = {
    tableName: string;
    selectColumns: string[];
    match?: {
        [key: string]: string | number | boolean
    };
    limit?: number;
    single?: boolean
}

type SelectedProps = { select: string } & Omit<UseSelectProps, "selectColumns">;

export function useSelect<T>({ tableName, selectColumns, ...props }: UseSelectProps) {
    const [selectResponse, setSelectResponse] = useState<T | null>(null);
    const [selectResponseError, setSelectResponseError] = useState<PostgrestError>();
    const arrToString = (arr?: string[]) => (arr ? arr.join(',') : '');
    const [selectProps, setSelectProps] = useState<SelectedProps>(() => {
        const initialValue = {
            tableName: tableName,
            select: arrToString(selectColumns),
            match: props.match || {},
            limit: props.limit || 10,
            single: props.single || false,
        }

        return initialValue
    })

    useEffect(() => {
        async function useSelect(values: SelectedProps) {
            const { select, tableName } = values;

            let query = supaDb
                .from(tableName)
                .select(select)
                .match(values.match || {})
                .limit(props.limit || 10)

            if (values.single == true) {
                query.single()
            }

            const { data, error } = await query

            setSelectResponse(data as T);
            setSelectResponseError(error ?? undefined);
        }

        useSelect(selectProps);
    }, [selectProps]);


    const selectData = (value: UseSelectProps) => {
        const selectedColumns = arrToString(value.selectColumns)

        setSelectProps(prevState => ({
            ...value,
            ...prevState,
            select: selectedColumns
        }))
    }

    return { selectResponse, selectResponseError, selectData };
}   