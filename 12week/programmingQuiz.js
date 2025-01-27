//8번
const Room = require('../schemas/room');
const Chat = require('../schemas/chat');
const { removeRoom: removeRoomService } = require('../services'); 
...
exports.removeRoom = async (req, res, next) => {
  try {
    await removeRoomService(req.params.id);		---(1)
    res.send('ok');					---(2)
  } catch (error) {
    console.error(error);
    next(error);
  }
};

//9번
...
app.use(express.static(path.join(__dirname, 'public')));
app.use('/gif', express.static(path.join(__dirname, 'uploads')));		---(1)
app.use(express.json());
...