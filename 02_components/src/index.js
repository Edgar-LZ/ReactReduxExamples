import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// Here we import the React components CommentDetail and ApprovalCard
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';



const App = () => {
    return (
        <div className="ui container comments">
	{/* Here we have nested components inside the App component */}
            <ApprovalCard>
                <h1 style={{color:'red'}}>Warning!</h1>
                <p>Are you sure you want to do this?</p>
            </ApprovalCard>
            <ApprovalCard>
		{/* Here we have a chil component inside the ApprovalCard component */}
                <CommentDetail
		 {/*
		   author, text, timeAgo and image
		   are props of the CommentDetail component
		 */}
                 author="Sam"
                 timeAgo="Today at 4:15PM"
                 text="Nice blog" 
                 image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                 author="James"
                 timeAgo="Today at 2:00PM"
                 text="You are the best" 
                 image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                 author="Goofy" 
                 timeAgo="Yesterday at 9:00AM"
                 text="you suck!" 
                 image={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>  
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

