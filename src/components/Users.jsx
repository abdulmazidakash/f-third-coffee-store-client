import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {

	const navigate = useNavigate();

	const loadedUsers = useLoaderData();
	const [users, setUsers] = useState(loadedUsers);

	const handleUserDelete = id =>{
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		  })
		  	.then((result) =>{
				if(result.isConfirmed){

					//delete from the database
					fetch(`http://localhost:5000/users/${id}`,{
						method: 'DELETE'
					})
						.then(res => res.json())
						.then(data => {
							// console.log(data);
							if(data.deletedCount){
								Swal.fire({
									  title: "Deleted!",
									  text: "Your coffee has been deleted.",
									  icon: "success"
									});
	  
								  const remainingUsers = users.filter(user => user._id !== id);
								  setUsers(remainingUsers);
							  }
						})
				}
			})
	}
	return (
		<div>
			<button onClick={()=> navigate('/')} className='btn bg-gradient-to-r from-orange-800 to-zinc-800 text-center text-white mx-auto mb-8 text-2xl semi-bold'>Home</button>
			<div className="container mx-auto mt-2 mb-8">
			<button className="text-2xl font-semibold text-center my-4 btn bg-gradient-to-l from-sky-800 to-rose-800 text-white">Users: {users.length}</button>
			<div className="overflow-x-auto bg-gradient-to-r from-slate-900 to-sky-800 font-semibold rounded-lg text-white">
				<table className="table text-center">
					{/* head */}
					<thead className="font-bold bg-gradient-to-l from-purple-900 to-violet-900">
					<tr className="text-white">
						<th>Sl</th>
						<th>Name</th>
						<th>Email</th>
						<th>Created Time</th>
						<th>Login</th>
						<th>Action</th>
					</tr>
					</thead>
					<tbody>
					{/* row 1 */}
					{
						users.map(user => <tr key={user._id}>
							<th>{user._id.slice(20,26)}</th>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.createdAt}</td>
							<td>{user.lastSignInTime							}</td>
							<td className="space-x-2">
								<button className="btn btn-sm">E</button>
								<button onClick={()=> handleUserDelete(user._id)} className="btn btn-sm">X</button>
							</td>
						</tr>)
					}
					</tbody>
				</table>
			</div>

		</div>
		</div>
	);
};

export default Users;