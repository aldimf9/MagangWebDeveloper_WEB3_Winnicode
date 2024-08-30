const { Application } = require('../models/model');
const upload = require('../middlewear/uploadzip');

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Application.findOne({ where: { id_user: req.params.id } });
    res.status(200).json({ notifications });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.createApplication = async (req, res) => {
    upload.single('zipFile')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
  
      try {
        const application = await Application.create({
          id_user: req.params.id,
          add_zip: req.file.path, // Menyimpan path file ZIP
        });
        res.status(201).json({ message: 'Application submitted', application });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });
  };