const Lead = require('./models/Lead');

exports.submitLead = (req, res) => {
    const { name, email, brand, referrer } = req.body;

    const newLead = new Lead({
        name,
        email,
        brand,
        referrer
    });

    newLead.save()
        .then(() => res.json({ success: true }))
        .catch(err => res.json({ success: false, error: err }));
};