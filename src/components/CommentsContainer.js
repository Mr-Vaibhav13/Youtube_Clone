import React from 'react'

// here in our clone comments have n level nesting..... redit have n level nesting 
// in real youtube comments have 2 level nesting


// hard coded data/comments
const CommentData = [
    {
        name:"Vaibhav Sharma",
        text:"Lorem ipium dolor sit amet, testing purpose",
        replies: [],
    },
    {
        name:"Vaibhav Sharma",
        text:"Lorem ipium dolor sit amet, testing purpose",
        replies: [
            {
            name:"Vaibhav Sharma",
            text:"Lorem ipium dolor sit amet, testing purpose",
            replies: [
                {
                    name:"Vaibhav Sharma",
                    text:"Lorem ipium dolor sit amet, testing purpose",
                    replies: [
                        {
                            name:"Vaibhav Sharma",
                            text:"Lorem ipium dolor sit amet, testing purpose",
                            replies: [],
                        },
                    ],
                },
            ],
            },
            
    ],
    },
    {
        name:"Vaibhav Sharma",
        text:"Lorem ipium dolor sit amet, testing purpose",
        replies: [{
            name:"Vaibhav Sharma",
            text:"Lorem ipium dolor sit amet, testing purpose",
            replies: [],
        },
    ],
    },
    {
        name:"Vaibhav Sharma",
        text:"Lorem ipium dolor sit amet, testing purpose",
        replies: [
            {
                name:"Vaibhav Sharma",
                text:"Lorem ipium dolor sit amet, testing purpose",
                replies: [],
            },
            {
                name:"Vaibhav Sharma",
                text:"Lorem ipium dolor sit amet, testing purpose",
                replies: [],
            },
        ],
    },
    {
        name:"Vaibhav Sharma",
        text:"Lorem ipium dolor sit amet, testing purpose",
        replies: [],
    },
    {
        name:"Vaibhav Sharma",
        text:"Lorem ipium dolor sit amet, testing purpose",
        replies: [],
    },
    {
        name:"Vaibhav Sharma",
        text:"Lorem ipium dolor sit amet, testing purpose",
        replies: [],
    },
]


// Comment Container
const Comment = ({data})=>{
    const {name, text, replies} = data;

    return( 
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-md my-2'>
        <img className='w-12 h-12 my-1' 
        alt='user'
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"/>
        
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>

    </div>
    )
}


// CommentList Container
// looping to all the comment list 
// rendering the comment and for each comment we r just displaying the comment 
const CommentList = ({comments})=>{

    // do not use index in keys... here doing as data is hardcoded and to make it error free
    return comments.map((comment, index)=>(
        <div key={index}>
            <Comment data={comment}/>
            <div className='pl-8 ml-5'>
                
                {/* recursion in components .... as end of the day each reply is comment and we need map for parsing on every reply*/}
                <CommentList comments={comment.replies}/>
            </div>
        </div>
        ))
};


const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        
        {/* <Comment data={CommentData[0]}/> */}
        <CommentList comments={CommentData}/>
    </div>
  )
}

export default CommentsContainer