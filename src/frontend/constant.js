export const timeAgo = (date) => {
  let currentDate = new Date();
  let yearDiff = currentDate.getFullYear() - new Date(date).getFullYear();

  if (yearDiff > 0) return `${yearDiff} year${yearDiff === 1 ? "" : "s"} ago`;

  let monthDiff = currentDate.getMonth() - new Date(date).getMonth();
  if (monthDiff > 0)
    return `${monthDiff} month${monthDiff === 1 ? "" : "s"} ago`;

  let dateDiff = currentDate.getDate() - new Date(date).getDate();
  if (dateDiff > 0) return `${dateDiff} day${dateDiff === 1 ? "" : "s"} ago`;

  let hourDiff = currentDate.getHours() - new Date(date).getHours();
  if (hourDiff > 0) return `${hourDiff} hour${hourDiff === 1 ? "" : "s"} ago`;

  let minuteDiff = currentDate.getMinutes() - new Date(date).getMinutes();
  if (minuteDiff > 0)
    return `${minuteDiff} minute${minuteDiff === 1 ? "" : "s"} ago`;
  return `a few seconds ago`;
};

export const AVATAR_IMGS = [
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-2_xbo2oi.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-1_up9sv8.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-7_azvwnb.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-4_tlvldl.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-5_gktqna.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-5_gktqna.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-3_d5wmgo.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-6_wmrhem.png",
];
