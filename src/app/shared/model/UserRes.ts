export class UserRes {
  gender!: string
  name!: {
    title: string
    first: string
    last: string
  }
  location!: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
  }
  email!: string
  dob!: {
    date: string
    age: number
  }
  phone!: string
  cell!: string
  picture!: {
    large: string
    medium: string
    thumbnail: string
  }
  nat!: string
  following!: boolean
  id!: string

  constructor(user: UserRes) {
    this.gender = user.gender
    this.name = {
      title: user.name.title,
      first: user.name.first,
      last: user.name.last
    }
    this.location = {
      street: {
        number: user.location.street.number,
        name: user.location.street.name
      },
      city: user.location.city,
      state: user.location.state,
      country: user.location.country
    }
    this.email = user.email
    this.dob = {
      date: user.dob.date,
      age: user.dob.age
    }
    this.phone = user.phone,
    this.cell = user.cell
    this.picture = {
      large: user.picture.large,
      medium: user.picture.medium,
      thumbnail: user.picture.thumbnail
    }
    this.nat = user.nat
    this.following = user.following
    this.id = user.id
  }
}
