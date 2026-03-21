"use client";

import { API_BASE_URL } from "@/src/lib/api";
import { useQuery } from "@tanstack/react-query";

async function fetchMe() {
    const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

    const res = await fetch(`${API_BASE_URL}/users/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Não autenticado");

    return res.json();
}

export function useMe() {
    return useQuery({
        queryKey: ["me"],
        queryFn: fetchMe,
        retry: false,
    });
}