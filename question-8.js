// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
fetch("https://jsonplaceholder.typicode.com/users")
  .then(recieve => recieve.json()) 
  .then(data => 
{
    const newUsers = data.map(user => user.name);
    console.log(newUsers);
});
//ไม่เข้าใจ