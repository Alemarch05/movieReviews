<?php

namespace App\Http\Controllers;

use App\Models\Movies;
use Dotenv\Exception\ValidationException as ExceptionValidationException;
use Illuminate\Http\Request;
use Iluminate\Validation\ValidationException;
class MoviesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    try {
        $movies = Movies::all();
        return response()->json([
            'response_code' => 200,
            'status' => 'success',
            'message' => 'Movies retrieved successfully',
            'data' => $movies
        ], 200);
    } catch (\Exception $th) {
        return response()->json([
            'response_code' => 500,
            'status' => 'error',
            'message' => 'Failed to retrieve movies',
            'error' => $th->getMessage()
        ], 500);
        }
    }

   
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validator = $request->validate([
                'title' => 'required|string|max:255',
                'director' => 'required|string|max:255',
                'genre' => 'required|string|max:100',
            ]);
        } catch (\Exception $th) {
            return response()->json([
                'response_code' => 422,
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $th->getMessage()
            ], 422);
        }

        $movies = Movies::create([
            'title' => $request->title,
            'director' => $request->director,
            'genre' => $request->genre,
        ]);
        return response()->json([
            'response_code' => 201,
            'status' => 'success',
            'message' => 'Movie created successfully',
            'data' => $movies
        ], 201);
    }

}
