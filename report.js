export default function withStatus(students) 
{
    let arr = [];
    for(let i = 0; i < students.length; i++)
    {
        arr.push({...students[i], status: students[i].grade >= 56 ? "pass" : "fail"});
    }
    return arr;
}