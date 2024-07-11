class UserModel {
  constructor(init) {
    this._id = init?._id;
    this.title = init?.title || '';
    this.stockstatus = init?.stockstatus || false;
    this.imageurl = init?.imageurl || '';
    this.description = init?.description || '';
  }
}

export default UserModel