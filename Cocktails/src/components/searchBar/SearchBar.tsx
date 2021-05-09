
export function SearchBar(props: any) {
        const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
        return(
        <>
                <input 
                style={BarStyling}
                placeholder={"search"}
                onChange={props.onChange}
                />   
        </>
        );

}