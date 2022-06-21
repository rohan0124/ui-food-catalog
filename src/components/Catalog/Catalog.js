import React, { useEffect, useState, } from 'react';
import { foodCategories } from "../../assets/utils/FoodItems";
import './Catalog.css'
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import Pagination from '../Pagination/Pagination';
import { paginate } from '../../assets/utils/paginate';
import { LIMIT } from '../../assets/utils/paginate';

const Catalog = () => {

  const [menu, setMenu] = useState({});
  const [pageNumber, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState([]);
  const [arrayToShow, setArrayToShow] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedResults, setSearchedResults] = useState([]);
  const [selectedcategory, setSelectedcategory] = useState('All');

  useEffect(() => {
    handleJsonData();
  }, [])

  useEffect(() => {
    handleArrayToShow();
  },[selectedcategory])

  useEffect(()=>{
    handleArrayToShow();
  },[searchedResults,pageNumber])


useEffect(()=>{

},[arrayToShow])

  const handlePageClick = (event) => {
    let x=Object.assign({},event);
    let pageSelected= x?.selected +1;
    setPage(pageSelected);
  };

  const handleArrayToShow = () => {
    let currentArray;
    if(searchQuery===''){
      currentArray=menu[selectedcategory];
    }
    else{
      currentArray=searchedResults;
    } 
    
    if (currentArray?.length > 0) {
      setTotalPages(Math.ceil(currentArray?.length / LIMIT))
      setArrayToShow(paginate(currentArray, pageNumber));
      
    }
    else{
      setArrayToShow([]);
      setTotalPages(1);
    }
  
  }
  const handleJsonData = () => {
    let categories = foodCategories.categorys;
    let allMenuItems = [];
    let allcategories = [];
    for (let i in categories) {
      let eachcat = {
        "id": categories[i].id,
        "name": categories[i].name,
        "menu-items": categories[i]?.['menu-items']
      }
      allcategories.push(eachcat);
      let menuItems = categories[i]?.['menu-items'];
      // allMenuItems=[...allMenuItems,...categoryItems]
      for (let j in menuItems) {
        let eachItem = menuItems[j];
        allMenuItems.push(eachItem);
      }
    }
    setCategories([{ id: '1', name: 'All', "menu-items": [] }, ...allcategories]);
    const obj = {}
    categories.forEach((item) => {
      obj[item.name] = item["menu-items"]
    })
    obj['All'] = allMenuItems
    setMenu(obj)
  }

  const handleTextChange = async (value) => {
    await setSearchQuery(value)
  }

  const  findSearchResults = async()=>{
    if (searchQuery !== '') {
    const searchedItems = await menu[selectedcategory].filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item['sub-items'][0]['cuisine_name'].toLowerCase()?.indexOf(searchQuery.toLowerCase())>=0 ||
        item['sub-items'][0]['category_name'].toLowerCase()?.indexOf(searchQuery.toLowerCase())>=0
    )
    setSearchedResults(searchedItems);
  }else {
    setSearchedResults([])
  }
}

  useEffect(() => {
   findSearchResults();
  }, [searchQuery])

  const handleCategory = async (event) => {
    await setSelectedcategory(event?.target?.value);
  }

  return (
    <div>
      <div>
        <NavBar
          dropdownList={categories}
          handleTextChange={handleTextChange}
          searchValue={searchQuery}
          categoryValue={selectedcategory}
          onChangeCategory={handleCategory}
        />
      </div>

      <div className="tilesContainer">
        {
          arrayToShow?.map((item,index) =>{
            return (
                <Card item={item} key={index} />
             
            )
          })
        }
      </div>
      {
        arrayToShow?.length>0 && totalPages> 1 &&
        <Pagination handlePageClick={handlePageClick} pageCount={totalPages} />
      }

    </div>
  );


}
export default Catalog;