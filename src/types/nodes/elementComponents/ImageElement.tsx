import {usePoster} from "@/hooks/usePoster";
import {BaseElement} from "@/components/base/BaseElement";
import {ImageNode} from "@/types/nodes/elementNodes/ImageNode";
import Image from "next/image";

export const ImageElement = ({id}: { id: string }) => {
    const {getNodeById, reRenderState} = usePoster();
    const node = getNodeById(id) as ImageNode;
    return (
        <BaseElement id={id}>
            <Image
                src={node.src}
                alt={"Image"}
                height={node.css.height}
                width={node.css.width}
                onDoubleClick={() => {
                    const fileUpload = document.createElement("input");
                    fileUpload.type = "file";
                    fileUpload.accept = "image/*";
                    fileUpload.onchange = (e) => {
                        const file = (e.target as HTMLInputElement).files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            node.src = e.target?.result as string;
                            reRenderState();
                        }
                        reader.readAsDataURL(file);
                    }
                    fileUpload.click();
                }}
                style={{borderRadius: node.css.borderRadius}}
            />
        </BaseElement>
    )
}