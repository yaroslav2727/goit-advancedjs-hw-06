/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PropsType<T> {
  title: T,
}

class Component {
  constructor (public props:PropsType<string>) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};