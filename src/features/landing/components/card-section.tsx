type Props = {
    title: string;
    text: string;
    icon: React.ElementType;
    colorIcon: string;
    colorBackground?: string;
    centerIcon?: boolean;
};

export function ValueCard({
    title,
    text,
    icon: Icon,
    colorIcon,
    colorBackground = "bg-white",
    centerIcon = false
}: Props) {

    return (
        <div
            className={`${colorBackground} p-6 rounded-xl shadow-sm space-y-3 ${centerIcon ? "text-center" : "text-left"
                }`}
        >

            <div
                className={
                    centerIcon
                        ? "flex flex-col items-center gap-3"
                        : "flex items-center gap-3"
                }
            >
                <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${colorIcon}`}
                >
                    <Icon size={20} />
                </div>

                <h3 className="font-semibold text-lg">
                    {title}
                </h3>
            </div>

            <p className="text-gray-500">
                {text}
            </p>

        </div>
    );
}