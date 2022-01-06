import React from "react";

const Divider = ({ results }) => {
    if(results.length === 0){
        return <></>;
    }

    return (
        <h4 class="ui horizontal divider header">
            <i class="list icon"></i>
            {results.length} videos found
        </h4>
    );
}

export default Divider;