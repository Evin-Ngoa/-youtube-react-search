import React from "react";

const VideoDetail = ({ video }) => {

    const title = video ? video.snippet.title : '';
    const description = video ? video.snippet.description : '';

    return (
        <div className="ui segment">
            <h4 className="ui header">
                {title}
            </h4>
            <p>
                {description}
            </p>
        </div>
    );
}

export default VideoDetail;