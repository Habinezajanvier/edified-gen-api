import { Partner }  from '../../models'

export default {
    addPartner: async (req, res) => {
        const { name, logo, partnerWeb } = req.body;
        const addedPartner = await Partner.create({
            name,
            logo,
            partnerWeb
        });

        return res.status(201).json({ msg: 'Partner added successfully', addedPartner })
    },
    getPartners: async (req, res) => {
        const partners = await Partner.findAll();
        if (partners.length === 0) return res.status(400).json({ msg: 'There are no Partners yet'})

        return res.status(200).json({ partners })
    },
    getPartner: async (req, res) => {
        const { id } = req.params;
        const singlePartner = await Partner.findOne({ where: { id }});

        if (!singlePartner) return res.status(400).json({ msg: 'No partner found'})

        return res.status(200).json({ singlePartner })
    },
    updatePartner: async (req, res) => {
        const { id } = req.params;
        const partnerToUpdate = await Partner.findOne({ where: { id }});
        
        if (!partnerToUpdate) return res.status(404).json({ msg: 'No partner found'})

        const updatedPartner = await partnerToUpdate.update(req.body);

        return res.status(200).json({ msg: 'Partner updated successfully', updatedPartner})
    },
    deletePartner: async (req, res) => {
        const { id } = req.params;
        const partnerToDelete = await Partner.findOne({ where: { id }});

        if (!partnerToDelete) return res.status(404).json({ msg: 'No partner found'})

        await partnerToDelete.destroy();
        const deletedPartner = partnerToDelete;
        return res.status(200).json({ msg: 'Partner deleted successfully', deletedPartner})
    }
};
