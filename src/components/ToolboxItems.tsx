
import { twMerge } from "tailwind-merge";
import LanguageIcon from "./LanguageIcon"
import { Fragment } from "react";
interface ToolboxItem {
    title: string;
    iconType: React.ElementType;

    // Ensure this is always provided
}

interface ToolboxItemsProps {
    items: ToolboxItem[];
    className?: string,
    itemsWrapperClassName?: string
}
function ToolboxItems({ items, className, itemsWrapperClassName }: ToolboxItemsProps) {
    return (
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
                {[...new Array(2)].fill(0).map((_, idx) => (
                    <Fragment key={idx}>
                        {
                            items.map(item => (
                                <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg ">
                                    <LanguageIcon component={item.iconType} />
                                    <span className="font-semibold">{item.title}</span>
                                </div>
                            ))
                        }
                    </Fragment>
                ))}

            </div>

        </div>
    )
}

export default ToolboxItems