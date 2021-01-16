/*
* Назначение прав доступа
*
* 1. Создать объекты
*
* Роль (админ, модератор, пользователь)
* // admin: "admin"
* Действие (читать, создавать, обновлять, удалять)
*
* 2. заморозить обьекты Object.freeze()
*
* 3. Создать Map: roleRights
*
* 4. function checkPermission(action, role)
*
* 5*. создать класс User с методом checkPermission()
* */

const ROLE = Object.freeze({admin: "ADMIN",
              moderator: "MODERATOR",
               user: "USER",
                 });
console.log(ROLE);

const ACTION = Object.freeze({
    read: "READ",
    create:"CREATE",
    update:"UPDATE",
    delete:"DELETE",
});

let roleRights = new Map();

roleRights.set(ACTION.CREATE, [ROLE.ADMIN, ROLE.MODERATOR] );
roleRights.set(ACTION.READ, [ROLE.ADMIN, ROLE.MODERATOR, ROLE.USER]);
roleRights.set(ACTION.UPDATE, [ROLE.MODERATOR]);
roleRights.set(ACTION.DELETE, [ROLE.ADMIN]);

console.log('map roleRights');
console.log(roleRights);

function checkPermission(action, role){
    if (roleRights.has(action)) {
        if (roleRights.has(action)){
            return roleRights.get(action).includes(role);
        }
        return false;
    }

    // реализация класса
    class User{
        constructor(name, email, role){
            this.name = name;
            this.email = email;
            this.role = role;
        }
        createRights(){

        }
    }
}

