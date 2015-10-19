var Project = require('./../models/project/projModel');
var Skill = require('./../models/skillModel').Skill;
var Location = require('./../models/locationModel').Location;
module.exports = {
    startProject : (req,res) =>{
        /**
         * variables
         * skills = [{area,field}]
         * files = [fileUrl] *
         * title *
         * pricePerDur *
         * pricePerHr *
         * location [{state,country}]
         * duration {mnths & wks & days} *
         * language *
         * description *
         *
         * */
        var postedBy = req.user.email;
        var title = req.body.title;
        var language = req.body.lang;
        var priceDur = req.body.priceDur;
        var priceHr = req.body.priceHr;
        var desc = req.body.desc;
        var duration = req.body.dateTime;
        var files = req.body.urls;
        var skills = req.body.skills;
        var locations = req.body.location;
        var project = new Project();
        project.title = title;
        project.language = language;
        project.pricePDur = priceDur;
        project.pricePHr = priceHr;
        project.description = desc;
        project.duration = duration;
        project.files = files;
        var pSkills = [];
        skills.map((content)=>{
            var skill = new Skill();
            skill.area = content.main_name;
            skill.field = content.subItem;
            pSkills.push(skill);
        });
        var pLocation = [];
        locations.map((content)=>{
            var location = new Location();
            loc.country = content.country;
            loc.state = content.state;
            pLocation.push(loc);
        });
        project.skills = pSkills;
        project.location = pLocation;
        project.postedBy = postedBy;

        project.save((err) => {
            if(err) {
                res.json({msg:"Error Ocurred While",status:false});
            } else {
                res.json({msg:"Project Successfully Started",status:true});
            }
        })
    }

}