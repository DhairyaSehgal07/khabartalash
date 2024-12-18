import News from "../models/newsModel.js";

const createNews = async (req, res) => {
  try {
    const { title, imageUrl, description } = req.body;

    if (!title || !imageUrl || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const newNews = await News.create({
      title,
      imageUrl,
      description,
    });

    if (newNews) {
      res.status(200).json({
        success: true,
        newNews,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Some error occured while creating news",
    });
  }
};

const getPaginatedNews = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const pageNumber = Math.max(1, parseInt(page));
    const limitNumber = Math.max(1, parseInt(limit));

    const skip = (pageNumber - 1) * limitNumber;

    const newsList = await News.find().skip(skip).limit(limitNumber);

    const totalNews = await News.countDocuments();

    return res.status(200).json({
      success: true,
      data: newsList,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalNews / limitNumber),
      totalItems: totalNews,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Some error occurred while getting paginated news",
    });
  }
};

export default getPaginatedNews;

const getSingleNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);

    if (news) {
      res.status(200).json({
        success: true,
        news,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Some error occured while getting single news",
    });
  }
};

const updateSingleNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);

    if (news) {
      news.title = req.body.title || news.title;
      news.imageUrl = req.body.imageUrl || news.imageUrl;
      news.description = req.body.description || news.description;
    }

    const updatedNews = await news.save();

    res.status(200).json({
      _id: updatedNews._id,
      title: updatedNews.title,
      imageUrl: updatedNews.imageUrl,
      description: updatedNews.description,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Some error occured while updating news",
    });
  }
};

const deleteSingleNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);

    if (news) {
      await news.deleteOne().exec();
      res.status(200).json({ success: true, message: "News deleted" });
    } else {
      res.status(404).json({ success: false, message: "News not found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Some error occured while deleting the news",
    });
  }
};
export {
  createNews,
  getPaginatedNews,
  getSingleNews,
  updateSingleNews,
  deleteSingleNews,
};
