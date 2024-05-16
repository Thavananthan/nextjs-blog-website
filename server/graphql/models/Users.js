class User {
  constructor(model) {
    this.Model = model;
  }

  getAuthUser(ctx) {
    if (ctx.isAuthenticated()) {
      return ctx.getUser();
    }

    return null;
  }

  async signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) {
      throw new Error("Passowrd must be same as confrim password");
    }

    try {
      return await this.Model.create(signUpData);
    } catch (e) {
      if (e.code && e.code === 11000) {
        throw new Error("User with provided email already exists!");
      }

      throw e;
    }
  }

  async signIn(signInData, ctx) {
    try {
      const user = await ctx.authenticate(signInData);
    } catch (error) {
      return error;
    }
  }

  async signOut(ctx) {
    try {
      ctx.logout();
    } catch (e) {
      return false;
    }
  }
}

module.exports = User;
