import {usePoster} from "@/hooks/usePoster";
import {BaseElement} from "@/components/elements/BaseElement";
import {ImageNode} from "@/types/nodes/elements/ImageNode";
import Image from "next/image";

export const ImageElement = ({id}: { id: string }) => {
    const {getNodeById} = usePoster();
    const node = getNodeById(id) as ImageNode;
    return (
        <BaseElement id={id}>
            <Image src={node.src} alt={"Image"} height={node.css.height} width={node.css.width} />
        </BaseElement>
    )
}