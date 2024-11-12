import { Route, Routes } from 'react-router-dom'
import './App.css'
import Courses from './Pages/Courses/Courses'
import Home from './Pages/Home/Home'
import CoursesDetail from './Pages/CoursesDetail/CoursesDetail'
import Blog from './Pages/Blog/Blog'
import BlogDetail from './Pages/BlogDetail/BlogDetail'
import CourseView from './Pages/CourseView/CourseView'
import Team from './Pages/Team/Team'
import About from './Pages/About/About'
import Instructor from './Pages/Instructor/Instructor'
import ShopDetail from './Pages/ShopDetail/ShopDetail'
import Shop from './Pages/Shop/Shop'
import BlogStyle from './Pages/BlogStyle/BlogStyle'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/coursesdetail' element={<CoursesDetail />} />
        <Route path='/courseview' element={<CourseView />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogdetail' element={<BlogDetail />} />
        <Route path='/blogstyle' element={<BlogStyle />} />
        <Route path='/team' element={<Team />} />
        <Route path='/about' element={<About />} />
        <Route path='/instructor' element={<Instructor />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shopdetail' element={<ShopDetail />} />
      </Routes>
    </>
  )
}

export default App
