import React from 'react';

// Here we pass props like the first argument of the component
const CommentDetail = (props) => {
    return(
        <div className="comment">
                <a href="/" className="avatar">
		    {/* You can reference a propery using props.propName */}
                    <img alt="avatar" src={props.image}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.text}</div>
                </div>
            </div>
    );

};

// Here we export the component to be used in another JS file
export default CommentDetail;
