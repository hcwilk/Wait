export default function Modal({showModal, setShowModal})  {


	function toggleModal(){
		setShowModal(false)
	}


    return (
		<>
		{showModal?
	 <div class="relative z-10" >
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
			<div class="fixed z-10 inset-0 overflow-y-auto">
				<div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
					<div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-5xl sm:w-full">
						<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div class="sm:flex sm:items-start">
								<div class="mx-auto flex-shrink-0 flex items-center justify-center rounded-full bg-red-100 sm:mx-0 ">
									<img src="WAIT.png" className="w-16 h-16"></img>
								</div>
					
							<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								<h3 class="text-4xl leading-6  text-gray-900 mt-6 font-semibold" >Confirm Transaction</h3>
								<div class="mt-2">
									<p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
									
								</div>
							</div>

							
						</div>
						
						
					</div>
				
					<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Confirm</button>
						<button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Send Without</button>
						<button onClick={toggleModal} class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
					</div>
				</div>
			</div>
		</div>
	</div>	
	:
		<></>
		}
       
	</>

    );
}
