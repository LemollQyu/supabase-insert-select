  'use client'
  import supabase from '../config/supabaseClient';
  import {useEffect, useState} from "react"
  import { useRouter } from 'next/navigation'

	

  export default function Kata() {
	  
	  const [ data, setData ] = useState(null)
	  const [ loading, setLoading ] = useState(true)
	  const router = useRouter()
	  
	  useEffect(() => {
		  const getData = async () => {
			  const { data, error } = await supabase.from('kata').select()
			  console.log({data, error})
			  setLoading(false)
			  setData(data)
			  router.refresh()
		  }
		  getData();
	  }, []);
   
    return (
	<>
	{ loading ?  <p>Loading...</p>
	:
		<div className="mt-10">
			{ data.map(txt => {
						return(
							<div key={txt.id} className="border mt-2">
								<p className="bg-zinc-200 font-italic font-myFont">{txt.kata}</p>
								
							</div>
						)
				})
				
			}
		</div>
	
	}
	
	</>
	)
  }