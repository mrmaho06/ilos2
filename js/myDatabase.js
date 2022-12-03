<<<<<<< HEAD

function istekParca(){
    let counter = 0;
    let getLink = prompt("Link girebilirsin :)");
    let ekle = document.querySelector("#isteklinki");
    //ekle.href = getLink;


    counter++;
    const gems = [
        {name: getLink, price: counter}
    ];
    
    const db = window.openDatabase('data', '1.0', 'data', 1*1024*1024);
    db.transaction(t => {
        //t.executeSql('CREATE TABLE gems2 (name TEXT, price INTEGER)');
        for (let g of gems) {
            t.executeSql('INSERT INTO gems2 (name, price) VALUES (?, ?)',
            [g.name, g.price]);
        }
        
    }, e => console.log(e));
    db.transaction(t => t.executeSql(
        'SELECT * FROM gems2 WHERE name=?',
        [getLink],
        (t, result) => {
            console.log(result.rows)
            $.each(result.rows, function() {
                var key = Object.keys(this)[0];
                var value = this[key];
                ekle.href = value;
              }); 
           
        }
    ));
    db.transaction(t => t.executeSql(
        'SELECT * FROM gems2',
        [],
        (t, result) => console.log(result.rows)
    ));
}


=======

function istekParca(){
    let counter = 0;
    let getLink = prompt("Link girebilirsin :)");
    let ekle = document.querySelector("#isteklinki");
    //ekle.href = getLink;


    counter++;
    const gems = [
        {name: getLink, price: counter}
    ];
    
    const db = window.openDatabase('data', '1.0', 'data', 1*1024*1024);
    db.transaction(t => {
        t.executeSql('CREATE TABLE gems2 (name TEXT, price INTEGER)');
        for (let g of gems) {
            t.executeSql('INSERT INTO gems2 (name, price) VALUES (?, ?)',
            [g.name, g.price]);
        }
        
    }, e => console.log(e));
    db.transaction(t => t.executeSql(
        'SELECT * FROM gems2 WHERE name=?',
        [getLink],
        (t, result) => {
            console.log(result.rows)
            $.each(result.rows, function() {
                var key = Object.keys(this)[0];
                var value = this[key];
                ekle.href = value;
              }); 
           
        }
    ));
    db.transaction(t => t.executeSql(
        'SELECT * FROM gems2',
        [],
        (t, result) => console.log(result.rows)
    ));
}


>>>>>>> b45eedca8022e52bc749e48ef55b831df8994c44
