package dev.vivek_sangwan.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> allMovies(){
        List<Movie> movies = movieRepository.findAll();
        return movies;
    }
    public Optional<Movie> movieByImdbId(String id){
        return movieRepository.findMovieByImdbId(id);
    }
}
