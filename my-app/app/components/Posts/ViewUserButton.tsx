"use client";
const ViewUserButton = () => {
    const handleClick = () => alert('DI KLIK NIH');
    return (
        <>
            <button onClick={handleClick}>Lihat User</button>
        </>
    );
};

export default ViewUserButton