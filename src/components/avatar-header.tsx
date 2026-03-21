"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "../lib/api";

interface User {
    name: string;
    profilePhoto?: string | null;
}

interface AvatarHeaderProps {
    user: User | null;
}

export function AvatarHeader({ user }: AvatarHeaderProps) {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const AVATAR_RANDOM = `https://api.dicebear.com/9.x/initials/svg?seed=${user?.name}&backgroundColor=c0aede`;

    const handleLogout = () => {
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        window.location.reload();
    };

    // Fecha o dropdown quando clica fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative">
            {/* Avatar Button */}
            <button onClick={() => setOpen(prev => !prev)}>
                <Image
                    src={user?.profilePhoto ? `${API_BASE_URL}${user.profilePhoto}` : AVATAR_RANDOM}
                    alt="Avatar"
                    width={40}
                    height={40}
                    unoptimized
                    className="rounded-full object-cover border"
                />
            </button>

            {/* Dropdown */}
            {open && (
                <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg p-2 z-50"
                >
                    <p className="px-3 py-2 text-sm text-gray-500">{user?.name}</p>

                    <button
                        onClick={() => {
                            router.push("/profile");
                            setOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                    >
                        Meu perfil
                    </button>

                    <button
                        onClick={() => {
                            handleLogout();
                            setOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-red-500"
                    >
                        Sair
                    </button>
                </div>
            )}
        </div>
    );
}