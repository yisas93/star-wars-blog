const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: [
			],
			films:[

			],
			starships:[],
			people:[],
		},


		
		actions: {


			getStarwars:async (element)=>{
				let resp= await fetch(`https://www.swapi.tech/api/${element}`)
				if(!resp.ok){
					console.error(resp.status + ": " +  resp.statusText)
					return
				}
				let data=await resp.json()
				let newStore={...getStore()}
				newStore[element]= data.results || data.result
				setStore(newStore)
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
