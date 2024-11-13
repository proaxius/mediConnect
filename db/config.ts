import { defineDb, column } from 'astro:db';

//tables
//users
export default defineDb({
  tables:{
user:{
  columns:{
    id: column.number({primaryKey:true }),
    name: column.text(),
    username: column.text(),
    email: column.text(),
    position: column.text(),
    passwordhash: column.text()
  }
},
//patient Data
patient:{

  columns:{
    id: column.number({primaryKey:true }),
    name: column.text(),
    handler: column.number(),
    email: column.text(),
    admitStatus: column.boolean(),
    comments: column.text(),
    visitDate:column.date(),
    address:column.text(),
  }
}
}
});


