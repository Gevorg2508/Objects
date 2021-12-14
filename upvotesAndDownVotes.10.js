let getVoteCount = function (obj){
    ({upvotes, downvotes} = obj);
    if(upvotes > downvotes){
        return console.log(upvotes - downvotes);
    }else if(upvotes < downvotes){
        return console.log((downvotes - upvotes)*-1);
    }else {
        console.log(upvotes - downvotes);
    }
}

getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0