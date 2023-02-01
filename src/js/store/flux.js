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
			favorites:[]
		},


		
		actions: {


			getStarwars:async (element, pagination = {})=>{
				let  params=""
				if(!!pagination.page){
					params=`?page=${pagination.page}&limit=${10}`
				}
				let resp= await fetch(`https://www.swapi.tech/api/${element}${params}`)
				if(!resp.ok){
					console.error(resp.status + ": " +  resp.statusText)
					return
				}
				let data=await resp.json()
				let newStore={...getStore()}
				newStore[element]= data.results || data.result
				setStore(newStore)
				return{
					records: data.total_records || null,
					pages:data.total_pages || null
				}
			},

			addFavorites:(element)=>{
				let currentStore=getStore()
				setStore({...currentStore,
					favorites:[...currentStore.favorites, element]
				})
			},

			removeFavorites:(index)=>{
				let currentStore=getStore()
				let NewFavorites=[...currentStore.favorites]
				NewFavorites.splice(index,1)
				setStore({
					...currentStore,
					favorites:NewFavorites
				})
			},

			handleFavorites:(data)=>{
				let storeActions=getActions()
				let favoriteIndex=getStore().favorites.findIndex(fav=>fav.link==data.link)
				if (favoriteIndex==-1){
				  storeActions.addFavorites(data)
				}else{
				  storeActions.removeFavorites(favoriteIndex)
				}
				
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
