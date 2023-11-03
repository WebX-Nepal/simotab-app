import slugify from 'slugify';


export const slugifyField=(name:string)=>{
    return slugify(name)
}