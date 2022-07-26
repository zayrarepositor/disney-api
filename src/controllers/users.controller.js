import { User } from "../models/User.js";
import { Role } from "../models/Role.js";

// getAllUsers,
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll({
      /* include: {
        model: Role,
        //attributes: ["rolename",],
      }, */
    });
    res.status(201).json(allUsers);
  } catch (error) {
    console.log(error);
  }
};

//updateUser,
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (user === null) {
      res.status(400).json({ msg: "user not found" });
    } else {
      const { username, email } = req.body;
      if (username) await user.update({ username });
      if (email) await user.update({ email });

      const userUpdated = await User.findByPk(id);
      res.status(202).send({
        msg: `You has updated a user`,
        userUpdated,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//deleteUser,
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.destroy({
      where: { id },
    });

    res.status(301).json({ msg: `You has deleted a user!` });
  } catch (err) {
    console.log(err);
  }
};
