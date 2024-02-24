'use client'

import { useState } from "react"
import supabase from "../config/supabaseClient"


const Create =  () => {
	const [ name ,setName ] = useState("")
	const [ prodi, setProdi ] = useState("")
	const [ umur, setUmur ] = useState("")
	const [ formError, setFormError ] = useState(null)
	
	const handleSubmit = async (e) => {
		e.preventDefault()
		if(!name || !prodi || !umur ) {
			
			setFormError("plesea fill in all the fields")
			return
		}
		
		
		
		
		const { data, error } = await supabase
			.from('learn-pertama')
			.insert({ nama: name, prodi: prodi, umur:umur })
			
			

				 
				
			}
	
	
	
	return (
	<>
	<div className="">
		<form onSubmit={handleSubmit} className="mx-auto w-1/2 flex flex-col gap-2 items-center">
			<label htmlFor="nama">Nama : </label>
			<input className="border-2 w-1/2"
			type="text"
			id="nama"
			value={name}
			onChange={(e) => {
				setName(e.target.value)
			}}
			/>
			
			<label htmlFor="prodi">Prodi : </label>
			<input className="border-2 w-1/2"
			type="text"
			id="prodi"
			value={prodi}
			onChange={(e) => {
				setProdi(e.target.value)
			}}
			/>
			
			<label htmlFor="umur">Umur : </label>
			<input className="border-2 w-1/2"
			type="number"
			id="umur"
			value={umur}
			onChange={(e) => {
				setUmur(e.target.value)
			}}
			/>
			
			<button>Create Data</button>
			
			{formError && <p>{formError}</p>}
		
		</form>
	</div>
	
	<div>
	
	
	</div>
	
	
	</>
	
	
	)
	
}

export default Create