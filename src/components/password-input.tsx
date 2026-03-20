"use client";

import { useState, useMemo } from "react";
import { cn } from "@/src/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { FieldDescription } from "@/src/components/ui/field";
import { Input } from "./ui/input";

type PasswordInputProps = React.ComponentProps<"input"> & {
    showStrength?: boolean;
    tooltip?: boolean;
};

export function PasswordInput({
    className,
    value = "",
    showStrength = false,
    tooltip = true,
    ...props
}: PasswordInputProps) {
    const [show, setShow] = useState(false);

    const password = typeof value === "string" ? value : String(value);

    // 🔹 força da senha
    const strength = useMemo(() => {
        if (!showStrength || !password)
            return { label: "", color: "text-gray-400", percent: 0 };

        let score = 0;
        if (password.length >= 8) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[^A-Za-z0-9]/.test(password)) score += 1;

        switch (score) {
            case 0:
            case 1:
                return { label: "Fraca", color: "text-red-500", percent: 25 };
            case 2:
                return { label: "Média", color: "text-yellow-500", percent: 50 };
            case 3:
                return { label: "Forte", color: "text-green-500", percent: 75 };
            case 4:
                return { label: "Muito Forte", color: "text-green-700", percent: 100 };
            default:
                return { label: "", color: "", percent: 0 };
        }
    }, [password, showStrength]);

    // 🔹 checagem de requisitos
    const requirements = [
        { label: "8 caracteres ou mais", valid: password.length >= 8 },
        { label: "Uma letra maiúscula", valid: /[A-Z]/.test(password) },
        { label: "Um número", valid: /[0-9]/.test(password) },
        { label: "Um símbolo especial", valid: /[^A-Za-z0-9]/.test(password) },
    ];

    return (
        <div className="flex flex-col gap-1 relative">
            <TooltipProvider>
                <div className="relative">
                    <Input
                        type={show ? "text" : "password"}
                        className={cn("pr-10", className)}
                        value={password}
                        {...props}
                    />

                    {tooltip && (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    type="button"
                                    onClick={() => setShow((prev) => !prev)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                                {show ? "Ocultar senha" : "Mostrar senha"}
                            </TooltipContent>
                        </Tooltip>
                    )}
                </div>
            </TooltipProvider>

            {showStrength && (
                <>
                    {/* barra de força */}
                    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden mt-1">
                        <div
                            className={cn("h-full rounded-full transition-all", strength.color)}
                            style={{ width: `${strength.percent}%` }}
                        ></div>
                    </div>

                    {/* label da força */}
                    <span className={cn("text-sm font-medium", strength.color)}>
                        {strength.label}
                    </span>

                    {/* requisitos da senha */}
                    <div className="flex flex-col gap-0.5 mt-1">
                        {requirements.map((req) => (
                            <FieldDescription
                                key={req.label}
                                className={cn(req.valid ? "text-green-500" : "text-gray-400")}
                            >
                                {req.label}
                            </FieldDescription>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}