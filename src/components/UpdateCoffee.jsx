import React from 'react';

const UpdateCoffee = () => {
	return (
		<div className='lg:w-3/4 mx-auto mb-8'>
		<div className="text-center p-10">
			<Link to='/' className="text-5xl font-bold">Update Coffee!</Link>
			<p className="py-6">
				Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
		</div>
		<div className="card bg-gradient-to-tr from-cyan-300 to-violet-400 w-full shrink-0 shadow-2xl ">
			<form  className="card-body">
				{/* form first row */}
				<div className='flex flex-col lg:flex-row gap-5'>
					<div className="form-control flex-1">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input type="text" name='name' defaultValue={name} placeholder="coffee name" className="input input-bordered" required />
					</div>
					<div className="form-control flex-1">
						<label className="label">
							<span className="label-text">Chef</span>
						</label>
						<input type="text" name='chef' defaultValue={chef} placeholder="chef name" className="input input-bordered" required />
					</div>
				</div>
				{/* form second row */}
				<div className='flex flex-col lg:flex-row gap-5'>
					<div className="form-control flex-1">
						<label className="label">
							<span className="label-text">Supplier</span>
						</label>
						<input type="text" name='supplier' defaultValue={supplier} placeholder="coffee supplier" className="input input-bordered" required />
					</div>
					<div className="form-control flex-1">
						<label className="label">
							<span className="label-text">Taste</span>
						</label>
						<input type="text" name='taste' defaultValue={taste} placeholder="taste name" className="input input-bordered" required />
					</div>
				</div>
				{/* form third row */}
				<div className='flex flex-col lg:flex-row gap-5'>
					<div className="form-control flex-1">
						<label className="label">
							<span className="label-text">Category</span>
						</label>
						<input type="text" name='category' defaultValue={category} placeholder="coffee Category" className="input input-bordered" required />
					</div>
					<div className="form-control flex-1">
						<label className="label">
							<span className="label-text">Details</span>
						</label>
						<input type="text" name='details' defaultValue={details} placeholder="Coffee Details" className="input input-bordered" required />
					</div>
				</div>


				<div className="form-control">
					<label className="label">
						<span className="label-text">Photo URL</span>
					</label>
					<input type="text" name='photo' defaultValue={photo} placeholder="Photo url" className="input input-bordered" required />

				</div>
				<div className="form-control mt-6">
					<button className="btn text-white text-xl font-bold bg-gradient-to-l from-gray-800 to-orange-800">UPDATE COFFEE</button>
				</div>
			</form>
		</div>
	</div>
	);
};

export default UpdateCoffee;