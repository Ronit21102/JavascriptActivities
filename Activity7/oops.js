
function User(name){

    this.name = name;
    this.friendList = [];
    
    this.addFriend = function(friend){

        this.friendList.push(friend)
    }

    this.printList = function(){
        console.log(this.friendList)
    }

    this.mutualFriends=function(obj){
       
        return this.friendList.filter((friend)=>obj.friendList.includes(friend))
    }

}

var PrintUser = function(){
 console.log(this.name)
}

const RonitUser = new User("Ronit");
RonitUser.addFriend("sachin")
RonitUser.addFriend("Tendulkar")
RonitUser.addFriend("Virat")
const RoushanUser = new User("Roushan");
RoushanUser.addFriend("sachin")
RoushanUser.addFriend("Kohli")
RoushanUser.addFriend("ishant")
RoushanUser.addFriend("Tendulkar")

// console.log(RonitUser)
// console.log(RoushanUser)

console.log(RonitUser.mutualFriends(RoushanUser))

const value =PrintUser.bind(RonitUser);

value();