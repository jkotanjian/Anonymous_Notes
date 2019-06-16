const AnonymousNote = require('mongoose').model('AnonymousNote');
// const { Http } = require('@status/codes');

module.exports = {
    index(_request, response) {
        AnonymousNote.find({}).sort('-createdAt')
            .then(notes => response.json(notes))
            .catch(error => response.json(error));
    },
    create(request, response) {
        AnonymousNote.create(request.body)
            .then(note => response.json(note))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                    reponse.json(errors);
            })
    }
}