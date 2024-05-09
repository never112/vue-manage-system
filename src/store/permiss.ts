import { defineStore } from 'pinia';

interface ObjectList {
    [key: string]: string[];
}

export const usePermissStore = defineStore('permiss', {
    state: () => {
        const defaultList: ObjectList = {
            admin: [
                '0',
                '1',
                '11',
                '12',
                '13',
                '2',
                '21',
                '22',
                '23',
                '24',
                '25',
                '26',
                '27',
                '28',
                '29',
                '291',
                '292',
                '3',
                '31',
                '32',
                '33',
                '34',
                '4',
                '41',
                '42',
                '5',
                '7',
                '6',
                '61',
                '62',
                '63',
                '64',
                '65',
                '66',
                '8',
                '9',
            ],
            user: ['0', '1', '12', '13'],
            qtest:['8','9']
        };
        const username = localStorage.getItem('vuems_name');
        console.log(username);
        switch(username){
            case "admin":{
                return {key:defaultList.admin,defaultList}
            }
            case "user":{
                return {key:defaultList.user,defaultList}
            }
            case "qtest":{
                return {key:defaultList.qtest,defaultList}

            }
            default: { 
                return {key:defaultList.qtest,defaultList}              
            } 

        }
        // const f= {
        //     key: (username == 'admin' ? defaultList.admin : defaultList.user) as string[],
        //     defaultList,
        // };
        // console.log(f)
        // return f
        
        
    },
    actions: {
        handleSet(val: string[]) {
            this.key = val;
        },
    },
});
