import {posterSizeFromName, size_names, SizeName} from "@/providers/PosterProvider";
import {usePoster} from "@/hooks/usePoster";

export const PosterSizeChooser = () => {

    const {getPosterSize, setPosterSize} = usePoster()
    const posterSize = getPosterSize()

    return <div style={{
        margin: "10px"
    }}>
        <label style={{marginRight: "40px"}}>Poster size</label>
        <select value={posterSize} onChange={(event) => {
            setPosterSize(event.target.value as SizeName)
        }}>
            {
                size_names.map((size_name: SizeName, index) => {
                    return <option key={index}
                                   value={size_name}>{posterSizeFromName[size_name].width} x {posterSizeFromName[size_name].height}</option>
                })
            }
        </select>
    </div>
}