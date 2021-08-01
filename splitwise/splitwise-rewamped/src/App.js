import './App.css';
import Person from './components/Person';
import React from 'react';
// var axios = require('axios');
import axios from 'axios'
import FormData from 'form-data'
import 'antd/dist/antd.dark.css'
import {
  Table,
  Tag,
  Space
} from 'antd';
const dataSource = [{
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [{
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.Splitwise = require('splitwise')
    this.sw = this.Splitwise({
      consumerKey: 'bk3LaPlmAJvVo60VwiPuijb6b4oCsRqTPbGcvgVC',
      consumerSecret: 'nT9F7z82eKRE5KaJOSQNIdoH6rCcAT6qvkXnwWe3'
    });
    this.state = { data: [], personalData: Object, userProfile: "", friendName:"", friendsExpenseData: [] };
  }
  componentDidMount() {
    this.getData();
    this.getPersonalData();
    this.getExpensesBtnFriends(this);
  }

  getData() {
    this.sw.getFriends().then((item) => {
      item.forEach(element => {
        element.first_name = element.first_name.charAt(0).toUpperCase() + element.first_name.substr(1).toLowerCase();
        element.last_name = element.last_name === null ? "" : (element.last_name.charAt(0).toUpperCase() + element.last_name.substr(1).toLowerCase());
        element.registration_status = element.registration_status.charAt(0).toUpperCase() + element.registration_status.substr(1).toLowerCase();
      });
      this.setState({ data: item });
    });
  }

  getPersonalData() {
    this.sw.getCurrentUser().then((item) => {
      this.setState({ userProfile: item.picture.small })
      this.setState({ personalData: item });
    })
  }

  getExpensesBtnFriends(self) {
    var data = new FormData();
    data.append('friend_id', '9105114');
    // data.append('friend_id', friend_id);
    data.append('limit', '1000');

    var config = {
      method: 'get',
      url: 'api/v3.0/get_expenses?limit=1000000',
      headers: {
        'Authorization': 'Bearer UOpp7i32muEIrFwEi9bcR0BLgthIkDvBkgnCKPew',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        self.setState({friendsExpenseData:response.data.expenses});
      })
      .catch(function (error) {
        console.log(error);
      });
   
  }

  render() {
    return <div class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
      <div class="bg-white dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">
        <div class="h-16 text-blue-500 flex items-center justify-center">
          <svg class="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
            <path fill="currentColor" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
          <button class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
            <svg viewBox="0 0 24 24" class="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>
          <button class="h-10 w-12 dark:bg-gray-700 dark:text-white rounded-md flex items-center justify-center bg-blue-100 text-blue-500">
            <svg viewBox="0 0 24 24" class="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </button>
          <button class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
            <svg viewBox="0 0 24 24" class="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              <line x1="12" y1="11" x2="12" y2="17"></line>
              <line x1="9" y1="14" x2="15" y2="14"></line>
            </svg>
          </button>
          <button class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
            <svg viewBox="0 0 24 24" class="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex-grow overflow-hidden h-full flex flex-col">
        <div class="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10 padding-20">
          <div class="flex h-full text-gray-600 dark:text-gray-400">
            <a href="#" class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Company</a>
            <a href="#" class="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center">Friends</a>
            <a href="#" class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Expense Centres</a>
            <a href="#" class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center">Currency Exchange</a>
          </div>
          <div class="ml-auto flex items-center space-x-7">
            {/* <button class="h-8 px-3 rounded-md shadow text-white bg-blue-500">Deposit</button> */}

            <button class="flex items-center">
              <span class="relative flex-shrink-0">
                <img class="w-7 h-7 rounded-full" src={this.state.userProfile} alt="profile" />
                <span class="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"></span>
              </span>
              <span class="ml-2">{this.state.personalData.first_name}</span>
              <svg viewBox="0 0 24 24" class="w-4 ml-1 flex-shrink-0" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex-grow flex overflow-x-hidden">
          <div class="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
            <div class="text-xs text-gray-400 tracking-wider">USERS</div>
            <div class="relative mt-2">
              <input type="text" class="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm" placeholder="Search" />
              <svg viewBox="0 0 24 24" class="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>

            <div class="space-y-4 mt-3">
              {this.state.data.map((eachPerson, i) => <Person name={eachPerson.first_name + " " + (eachPerson.last_name === null ? "" : eachPerson.last_name)}
                dept={eachPerson.registration_status}
                money="INR 2,794.00" image={eachPerson.picture.small} />)}
            </div>
          </div>
          <div class="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
            <div class="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
              <div class="flex w-full items-center">
                <div class="flex items-center text-3xl text-gray-900 dark:text-white mr-4">
                  <img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512" class="w-12 mr-4 rounded-full" alt="profile" />
                  Mert Cukuren
                </div>
                <div class="flex items-center text-3xl text-gray-900 dark:text-white mr-4 ml-4">
                </div>
                <div class="flex items-center text-3xl text-gray-900 dark:text-white ml-4">
                  <img src={this.state.userProfile} class="w-12 mr-4 rounded-full" alt="profile" />
                  {this.state.personalData.first_name}
                </div>
                <div class="ml-auto sm:flex hidden items-center justify-end">
                  <div class="text-right">
                    <div class="text-xs text-gray-400 dark:text-gray-400">Account balance:</div>
                    <div class="text-gray-900 text-lg dark:text-white">$2,794.00</div>
                  </div>
                  <button class="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                    <svg viewBox="0 0 24 24" class="w-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex items-center space-x-3 sm:mt-7 mt-4">
                <a href="#" class="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5">Activities</a>
                <a href="#" class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5">Transfer</a>                <a href="#" class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Budgets</a>
                <a href="#" class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Notifications</a>
                <a href="#" class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Cards</a>
              </div>
            </div>
            <div class="sm:p-7 p-4">
              <Table dataSource = { this.state.friendsExpenseData } bordered
              columns = { columns } />
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default App;
