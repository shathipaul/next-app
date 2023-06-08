

const UserId = async ({ id }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();

    console.log(data)
    return (
        <div>

        </div>
    );
};

export default UserId;