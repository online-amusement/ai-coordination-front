export default function ({ store, route, redirect }:{store: any, route: any, redirect: any}) {
    //ログインしてなくてhomeに飛んできたらトップページに飛ばす
    if(route.path === '/home' && !store.$auth.loggedIn) {
        redirect('/');
    }

    //ログインしてなくてトップページに飛んだらそのまま
    if(route.path === '/' && !store.$auth.loggedIn) {
        return true;
    }

    //ログインしていてトップページに来たらhomeに飛ばす
    if(route.path === '/' && store.$auth.loggedIn) {
        redirect('/home');
    }  
}

    