import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UsersContext } from '../../Context/UsersContext'

const CreateUser = () => {
	const navigate = useNavigate()

	const { users, setUsers } = useContext(UsersContext)

	const [createEmail, setCreateEmail] = useState('')
	const [createPassword, setCreatePassword] = useState('')
	const [emptyInput, setEmptyInput] = useState(false)
	const [userAlreadyExist, setUserAlreadyExist] = useState(false)
	const [userCreated, setUserCreated] = useState(false)

	const createUser = async () => {
		try {
			if (createEmail.trim() === '' || createPassword.trim() === '') {
				setEmptyInput(true)
				setUserAlreadyExist(false)
				return
			}

			if (users.some((user) => user.email === createEmail)) {
				setUserAlreadyExist(true)
				setEmptyInput(false)
				return
			}

			const response = await fetch('http://localhost:3000/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: createEmail,
					password: createPassword,
				}),
			})
			if (!response.ok) {
				throw new Error(error + 'Failed to create user!')
			}
			const data = await response.json()

			setUserCreated(true)
			setUsers([
				...users,
				{
					email: createEmail,
					password: createPassword,
				},
			])

			setEmptyInput(false)
			setUserAlreadyExist(false)
			setTimeout(() => {
				navigate('/login')
			}, 2000)
		} catch (error) {
			console.log(error + 'error creating user!')
		}
	}

	return (
		<>
			<div className='divider'></div>
			<div className='container mt-10'>
				<div className='card w-96 bg-base-200 text-neutral-content mx-auto'>
					<div className='card-body items-center text-center '>
						<h2 className='text-3xl mb-5 text-black'>
							Create User
						</h2>
						<input
							type='email'
							name='email'
							id='email'
							autoComplete='email'
							placeholder='Email'
							minLength='5'
							onChange={(e) => setCreateEmail(e.target.value)}
							className='input input-bordered input-accent w-full max-w-xs text-black'
						/>

						<input
							type='password'
							name='password'
							id='password'
							autoComplete='password'
							placeholder='Password'
							minLength='5'
							onChange={(e) => setCreatePassword(e.target.value)}
							className='input input-bordered input-accent w-full max-w-xs text-black'
						/>
						<button
							className='btn btn-accent'
							onClick={() => createUser()}
						>
							Create user
						</button>
						<NavLink
							to='/login'
							className='btn btn-ghost hover:scale-110 text-black'
						>
							Back to login page
						</NavLink>
					</div>
					{userCreated && (
						<div role='alert' className='alert alert-success mt-6'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='stroke-current shrink-0 h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
							<span>User created. Welcome {createEmail}!</span>
						</div>
					)}
					{emptyInput && (
						<div role='alert' className='alert alert-warning mt-6'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='stroke-current shrink-0 h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
								/>
							</svg>
							<p>Email or password fields cannot be empty!</p>
						</div>
					)}
					{userAlreadyExist && (
						<div role='alert' className='alert alert-warning mt-6'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='stroke-current shrink-0 h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
								/>
							</svg>
							<p>E-mail already registered! Try another E-mail</p>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
export default CreateUser
